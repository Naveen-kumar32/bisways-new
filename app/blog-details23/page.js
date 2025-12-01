import Layout from "@/components/layout/Layout"
import BlogDetails23 from "@/components/pages/blogDetails23"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="February 28, 2023" category="GST Voluntary Payment" breadcrumbText="Form DRC-03 – Voluntary Payment">
				<BlogDetails23 />
			</Layout>
		</>
	)
}