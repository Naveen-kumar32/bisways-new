
import Layout from "@/components/layout/Layout"
import Contact from "@/components/pages/contact"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle=" Contact Us" mainCls="padding-0" breadcrumbImage="/images/section/contact-us.svg">
				<Contact />
			</Layout>
		</>
	)
}