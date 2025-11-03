
import Layout from "@/components/layout/Layout"
import TrustNGOCSRSupport from "@/components/pages/TrustNGOCSRSupport"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Trust, NGO & CSR Support" mainCls="tf-spacing-10" breadcrumbImage="/images/section/ngo-hero.svg">
				<TrustNGOCSRSupport />
			</Layout>
		</>
	)
}