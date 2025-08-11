"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function CompanyNameFinderPage() {
  const [companyName, setCompanyName] = useState("");
  const [preferences, setPreferences] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!companyName.trim()) {
      setError("Please enter a company name.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await axios.post(
        "https://company-mca-service-977121587860.asia-south1.run.app/check-name",
        { company_name: companyName, preferences }
      );

      setResult(response.data);
    } catch (err) {
      console.error(err);
      setError("Failed to check company name. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Check Your <AuroraText>Company Name</AuroraText> Instantly
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl">
          Verify MCA compliance, domain availability, and trademark conflicts in seconds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Enter proposed company name"
          />
          <input
            type="text"
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Optional: brand style or keywords"
          />
        </div>

        <RainbowButton variant="outline" onClick={handleSearch} disabled={loading}>
          {loading ? "Checking..." : "Check Name Availability"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {result && (
          <div className="mt-10 p-6 bg-white rounded-md shadow-md prose max-w-none">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <pre className="whitespace-pre-wrap text-sm">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
