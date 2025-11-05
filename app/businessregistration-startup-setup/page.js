
import Layout from "@/components/layout/Layout"
import BusinessRegistrationStartupSetup from "@/components/pages/BusinessRegistrationStartupSetup"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Business Registration & Setup"breadcrumbText="Simplify Your Business Start-up Process and Ensure Legal Compliance" mainCls="tf-spacing-10" breadcrumbImage="/images/section/business-hero.svg">
				<BusinessRegistrationStartupSetup />
			</Layout>
		</>
	)
}