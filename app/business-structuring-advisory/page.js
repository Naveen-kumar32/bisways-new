
import Layout from "@/components/layout/Layout"
import BusinessStructuringAdvisory from "@/components/pages/BusinessStructuringAdvisory"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Business Structuring & Advisory" mainCls="tf-spacing-10" breadcrumbImage="/images/section/business-structure-hero.svg">
				<BusinessStructuringAdvisory />
			</Layout>
		</>
	)
}