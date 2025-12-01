import Layout from "@/components/layout/Layout"
import BlogDetails2 from "@/components/pages/blogDetails2"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="November 5, 2021" category=" Financial Statement Analysis" breadcrumbText="How to Read & Analyse a Profit & Loss Statement">
				<BlogDetails2 />
			</Layout>
		</>
	)
}