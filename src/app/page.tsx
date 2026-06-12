import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { layoutConfig } from "@/config/layout.config";
import { createWhatsAppLink } from "@/lib/whatsapp";

export default function Home() {
  return (
    <>
      <SectionRenderer />
      {layoutConfig.showFloatingWhatsApp ? (
        <Button
          href={createWhatsAppLink()}
          variant="primary"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-5 right-5 z-40 h-16 w-16 rounded-full bg-[#6F7A58] p-0 text-white shadow-soft ring-4 ring-[var(--color-secondary)] hover:brightness-95"
        >
          <WhatsAppIcon className="h-8 w-8" />
        </Button>
      ) : null}
    </>
  );
}
