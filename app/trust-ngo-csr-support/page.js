
import Layout from "@/components/layout/Layout"
import TrustNGOCSRSupport from "@/components/pages/TrustNGOCSRSupport"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Trust, NGO & CSR Support"breadcrumbText="Stay compliant with 12A, 80G, CSR-1, and FCRA filings — ensuring donor confidence and uninterrupted operations." mainCls="tf-spacing-10" breadcrumbImage="/images/section/ngo-hero.svg">
				<TrustNGOCSRSupport />
			</Layout>
		</>
	)
}