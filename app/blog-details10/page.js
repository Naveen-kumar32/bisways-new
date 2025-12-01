import Layout from "@/components/layout/Layout"
import BlogDetails10 from "@/components/pages/blogDetails10"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="June 8, 2024" category="TDS Compliance" breadcrumbText="Understanding TDS – Forms & Due Dates">
				<BlogDetails10 />
			</Layout>
		</>
	)
}