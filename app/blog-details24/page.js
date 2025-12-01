import Layout from "@/components/layout/Layout"
import BlogDetails24 from "@/components/pages/blogDetails24"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="March 25, 2023" category="GST Reconciliation" breadcrumbText="GSTR-2B & GSTR-3B Reconciliation">
				<BlogDetails24 />
			</Layout>
		</>
	)
}