"use client";

import { useState } from "react";
import Image from "next/image";
import { QrCode, X, Copy, Check, ExternalLink, Download } from "lucide-react";
import { useStudioSound } from "@/components/effects/SoundEffects";

interface QrDownloadModalProps {
  title: string;
  url: string;
  coverImage: string;
  category?: string;
  isOpen?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
}

export function QrModalDialog({
  title,
  url,
  coverImage,
  isOpen,
  onClose,
}: {
  title: string;
  url: string;
  coverImage: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const { playSound } = useStudioSound();

  if (!isOpen) return null;

  const handleCopy = () => {
    playSound("pop");
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(
    url
  )}&bgcolor=ffffff&color=09090b&margin=1`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-[fadeIn_0.2s_ease-out]"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-[2.2rem] border border-white/20 bg-[#121215] p-6 sm:p-8 shadow-2xl text-center space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => {
            playSound("click");
            onClose();
          }}
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-zinc-400 hover:text-white transition-colors cursor-pointer border border-white/10"
        >
          <X className="h-4 w-4" />
        </button>

        {/* App Info Header */}
        <div className="flex flex-col items-center space-y-2">
          <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-white/15 shadow-lg p-0.5 bg-zinc-950">
            <Image src={coverImage} alt={`${title} kapak görseli`} fill sizes="56px" className="rounded-xl object-cover" />
          </div>
          <h3 className="text-xl font-bold text-white font-display">{title}</h3>
          <p className="text-xs text-zinc-400">
            Kameranızı açarak aşağıdaki QR kodu taratın ve hemen telefonunuza indirin.
          </p>
        </div>

        {/* QR Code Frame */}
        <div className="relative mx-auto flex h-52 w-52 items-center justify-center rounded-2xl border border-white/15 bg-white p-4 shadow-inner">
          <Image
            src={qrImageUrl}
            alt={`${title} İndirme QR Kodu`}
            width={176}
            height={176}
            sizes="176px"
            className="relative z-10 rounded-lg"
          />
        </div>

        {/* Action Row */}
        <div className="space-y-2.5 pt-2">
          <button
            onClick={handleCopy}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-2.5 text-xs font-semibold text-zinc-200 hover:border-white/30 hover:text-white transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-300">Bağlantı Kopyalandı!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-zinc-400" />
                <span>İndirme Linkini Kopyala</span>
              </>
            )}
          </button>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-xs font-bold text-zinc-950 shadow-lg hover:bg-zinc-200 transition-all"
          >
            <Download className="h-4 w-4" />
            <span>Google Play&apos;de Aç</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}

export function QrDownloadButton({ title, url, coverImage }: QrDownloadModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { playSound } = useStudioSound();

  const handleOpen = () => {
    playSound("click");
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-xs font-semibold text-zinc-300 hover:text-white hover:border-white/30 transition-all cursor-pointer shadow-sm"
        title="Telefonda QR Kod ile Aç"
      >
        <QrCode className="h-4 w-4 text-zinc-300" />
        <span>QR ile Tara</span>
      </button>

      <QrModalDialog
        title={title}
        url={url}
        coverImage={coverImage}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
