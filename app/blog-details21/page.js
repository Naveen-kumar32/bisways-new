import Layout from "@/components/layout/Layout"
import BlogDetails21 from "@/components/pages/blogDetails21"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="September 14, 2022" category="OPC Annual Compliance" breadcrumbText="ROC Annual Filings for OPC">
				<BlogDetails21 />
			</Layout>
		</>
	)
}