"use client";

import React, { useState } from "react";
import axios from "axios";
import VantaFog from "@/components/VantaFog";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";

export default function AIDoctorPage() {
  const [query, setQuery] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [urgency, setUrgency] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleSearch = async () => {
    setLoading(true);
    setError("");
    setResult("");
    try {
      const response = await axios.post(
        "https://aidoctor-977121587860.asia-south2.run.app/run",
        { query, age, gender, urgency, specialty }
      );

      setResult(response.data.result.raw || "No response from AI Doctor.");
    } catch (err) {
      console.error(err);
      setError("Failed to fetch medical advice. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <VantaFog />
      <div className="max-w-5xl mx-auto p-6 mt-10 space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-primary">
          Get Expert <AuroraText>AI Medical Advice</AuroraText>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="p-4 border rounded-md h-32"
            placeholder="Describe your symptoms..."
          />
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Age"
          />
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="p-4 border rounded-md"
          >
            <option value="">Select Urgency</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            className="p-4 border rounded-md"
            placeholder="Specialty (e.g., cardiology)"
          />
        </div>

        <RainbowButton variant="outline" onClick={handleSearch} disabled={loading}>
          {loading ? "Analyzing..." : "Get Medical Advice"}
        </RainbowButton>

        {error && <p className="text-red-500 font-medium">{error}</p>}

        {result && (
          <div className="mt-10 p-6 bg-white rounded-md shadow-md prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, "<br/>") }} />
          </div>
        )}
      </div>
    </div>
  );
}
