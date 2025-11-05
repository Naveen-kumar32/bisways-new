
import Layout from "@/components/layout/Layout"
import GSTTaxationAudit from "@/components/pages/GSTTaxationAudit"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="GST, Income Tax & Audit Support"breadcrumbText="Accurate, timely, and compliant filings for every business type." breadcrumbImage="/images/section/gst-hero.svg">
				<GSTTaxationAudit />
			</Layout>
		</>
	)
}