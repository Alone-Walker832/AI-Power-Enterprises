import heroCctv from "@/assets/hero-cctv.jpg";
import heroDatacenter from "@/assets/hero-datacenter.jpg";
import heroManaged from "@/assets/hero-managed.jpg";
import heroNetworking from "@/assets/hero-networking.jpg";
import heroServers from "@/assets/hero-servers.jpg";
import heroSla from "@/assets/hero-sla.jpg";
import heroStorage from "@/assets/hero-storage.jpg";
import type { HeroImageKey } from "@/data/companyData";

export const heroImages: Record<HeroImageKey, string> = {
  cctv: heroCctv,
  datacenter: heroDatacenter,
  managed: heroManaged,
  networking: heroNetworking,
  servers: heroServers,
  sla: heroSla,
  storage: heroStorage,
};