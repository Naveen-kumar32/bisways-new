
import Layout from "@/components/layout/Layout"
import VirtualCFOServices from "@/components/pages/VirtualCFOServices"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Virtual CFO Services"breadcrumbText="Enabling compliant, scalable, and investor-ready digital ventures." mainCls="tf-spacing-10" breadcrumbImage="/images/section/cfo-hero.svg">
				<VirtualCFOServices />
			</Layout>
		</>
	)
}