import Layout from "@/components/layout/Layout"
// import Home2 from "@/components/pages/home2"
import Home1 from "@/components/pages/home1"
export default function Home() {

	return (
		<>
			<Layout headerStyle={2} footerStyle={2} hero={2} mainCls="style-2">
				{/* <Home2 /> */}
				<Home1 />
			</Layout>
		</>
	)
}