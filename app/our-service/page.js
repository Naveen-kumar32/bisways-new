
import Layout from "@/components/layout/Layout"
import VirtualCFOServices from "@/components/pages/VirtualCFOServices"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Virtual CFO Services" mainCls="tf-spacing-10">
				<VirtualCFOServices />
			</Layout>
		</>
	)
}