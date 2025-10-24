import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StakeholdersContent } from "@/components/stakeholders-content"

export default function StakeholdersAndPartnersPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />
      <StakeholdersContent />
      <SiteFooter />
    </div>
  )
}
