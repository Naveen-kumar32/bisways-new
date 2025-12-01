import Layout from "@/components/layout/Layout"
import BlogDetails3 from "@/components/pages/blogDetails3"
export default function Home() {

	return (
		<>
			<Layout breadcrumbAlt={1} date="February 20, 2023 " category="GST Annual Returns" breadcrumbText="GST Annual Return (GSTR-9)">
				<BlogDetails3 />
			</Layout>
		</>
	)
}