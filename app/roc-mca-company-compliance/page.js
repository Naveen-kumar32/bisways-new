
import Layout from "@/components/layout/Layout"
import ROCMCACompanyCompliance from "@/components/pages/ROCMCACompanyCompliance"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="ROC MCA & Company Compliance"breadcrumbText="Stay compliant with ROC, MCA, and regulatory formalities — on time, every time." mainCls="tf-spacing-10" breadcrumbImage="/images/section/roc-hero.svg">
				<ROCMCACompanyCompliance />
			</Layout>
		</>
	)
}