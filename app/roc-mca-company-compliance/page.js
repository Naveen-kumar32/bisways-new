
import Layout from "@/components/layout/Layout"
import ROCMCACompanyCompliance from "@/components/pages/ROCMCACompanyCompliance"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="ROC MCA & Company Compliance" mainCls="tf-spacing-10" breadcrumbImage="/images/section/roc-hero.svg">
				<ROCMCACompanyCompliance />
			</Layout>
		</>
	)
}