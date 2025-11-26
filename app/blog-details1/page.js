import Layout from "@/components/layout/Layout"
import BlogDetails1 from "@/components/pages/blogDetails1"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="August 14, 2021" category="Virtual CFO Fundamentals" breadcrumbText="Understanding the Role of a Virtual CFO
									in Modern Businesses">
				<BlogDetails1 />
			</Layout>
		</>
	)
}