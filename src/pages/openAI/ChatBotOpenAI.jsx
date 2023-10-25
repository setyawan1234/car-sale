import React from "react";
import OpenAI from "openai";
import { Navbar } from "@/components/navbar";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { InputTextAI } from "@/components/input";
import { Button2 } from "@/components/button";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function ChatBotOpenAI() {
  const [prompt, setPrompt] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchDataOpenAI();
  }, []);

  async function fetchDataOpenAI() {
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful chatbot." }],
        model: "gpt-3.5-turbo",
      });
      setResults(response.choices);
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const userMsg = {
      message: {
        content: prompt,
        role: "user",
      },
    };
    const newData = [...results, userMsg];
    setResults(newData);
    setPrompt("");
    try {
      const response = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });
      const choice = response.choices[0];
      setResults([...newData, choice]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-gray-900 h-[93.1vh] text-gray-100 flex flex-col">
        <div className="w-full h-[81.4vh] grow flex flex-col overflow-auto">
          {results.map((output) => (
            <p
              className={clsx(
                "rounded-lg p-3 mb-4 w-fit",
                output.message.role === "assistant"
                  ? "self-start ml-2 mt-2 bg-green-500 text-black max-w-3xl"
                  : "self-end bg-gray-200 text-black max-w-3xl mr-2 mt-2"
              )}
              key={output.message.content}
            >
              {output.message.content}
            </p>
          ))}
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex justify-center items-center gap-2 mb-5 px-2"
        >
          <InputTextAI
            type="text"
            placeholder="Input your text -_-"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <Button2
            label={isLoading ? "Loading..." : "Send"}
            type="submit"
            disabled={isLoading}
            aria-disabled={isLoading}
            bgColor="#22C55E"
            color="text-black"
          />
        </form>
      </div>
    </>
  );
}
