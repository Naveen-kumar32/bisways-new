import Layout from "@/components/layout/Layout"
import BlogDetails12 from "@/components/pages/blogDetails12"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="May 9, 2022" category="Commencement of Business" breadcrumbText="MCA Form INC-20A">
				<BlogDetails12 />
			</Layout>
		</>
	)
}