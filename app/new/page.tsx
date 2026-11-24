import type { Metadata } from "next";
import { Instrument_Serif, Manrope } from "next/font/google";
import { CasaMareaNew } from "./CasaMareaNew";
import "./casa-marea.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Casa Marea",
  description:
    "Alquiler de departamento frente al mar en Bahía Serena. 2 ambientes, balcón con vista al océano, a 50 pasos de la arena.",
};

export default function CasaMareaNewPage() {
  return (
    <div className={`${instrumentSerif.variable} ${manrope.variable}`}>
      <CasaMareaNew />
    </div>
  );
}
