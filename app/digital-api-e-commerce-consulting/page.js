
import Layout from "@/components/layout/Layout"
import DigitalAPIeCommerceConsulting from "@/components/pages/DigitalAPIeCommerceConsulting"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Digital, API & eCommerce Consulting" mainCls="tf-spacing-10" breadcrumbImage="/images/section/digital-hero.svg">
				<DigitalAPIeCommerceConsulting />
			</Layout>
		</>
	)
}