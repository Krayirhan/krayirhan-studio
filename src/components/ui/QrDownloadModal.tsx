"use client";

import { useState } from "react";
import { QrCode, X, Copy, Check, ExternalLink, Smartphone, Download } from "lucide-react";
import { useStudioSound } from "@/components/effects/SoundEffects";

interface QrDownloadModalProps {
  title: string;
  url: string;
  coverImage: string;
  category: string;
}

export function QrDownloadButton({ title, url, coverImage, category }: QrDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { playSound } = useStudioSound();

  const handleOpen = () => {
    playSound("click");
    setIsOpen(true);
  };

  const handleCopy = () => {
    playSound("pop");
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Google Charts QR Generator for reliable, high-speed QR rendering
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    url
  )}&bgcolor=0a0f1d&color=38bdf8&margin=1`;

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/80 px-3.5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white hover:border-cyan-400 transition-all cursor-pointer shadow-sm"
        title="Telefonda QR Kod ile Aç"
      >
        <QrCode className="h-4 w-4 text-cyan-400" />
        <span>QR ile Tara</span>
      </button>

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl border border-cyan-500/40 bg-gradient-to-b from-[#0e1626] to-[#07090e] p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 text-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => {
                playSound("click");
                setIsOpen(false);
              }}
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* App Info Header */}
            <div className="flex flex-col items-center space-y-2">
              <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-slate-700 shadow-lg p-1 bg-slate-900">
                <img src={coverImage} alt={title} className="h-full w-full object-cover rounded-xl" />
              </div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-xs text-slate-400">
                Kameranızı açarak aşağıdaki QR kodu taratın ve hemen telefonunuza indirin.
              </p>
            </div>

            {/* QR Code Frame with Glow */}
            <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-2xl border-2 border-cyan-500/40 bg-[#0a0f1d] p-4 shadow-inner">
              <div className="absolute inset-0 bg-cyan-500/10 blur-xl pointer-events-none rounded-2xl" />
              <img
                src={qrImageUrl}
                alt={`${title} İndirme QR Kodu`}
                className="relative z-10 h-44 w-44 rounded-lg"
              />
            </div>

            {/* Action Row: Direct Link & Copy */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleCopy}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/90 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400 hover:text-white transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-300">Bağlantı Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-slate-400" />
                    <span>İndirme Linkini Kopyala</span>
                  </>
                )}
              </button>

              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 py-3 text-xs font-bold text-white shadow-lg shadow-emerald-600/30 hover:opacity-95 transition-all"
              >
                <Download className="h-4 w-4" />
                <span>Mağazada Aç (Google Play)</span>
                <ExternalLink className="h-3 w-3 text-emerald-200" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
