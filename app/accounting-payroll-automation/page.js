
import Layout from "@/components/layout/Layout"
import AccountingPayrollAutomation from "@/components/pages/AccountingPayrollAutomation"
export default function Home() {

	return (
		<>
			<Layout breadcrumbTitle="Accounting, Payroll & Automation" breadcrumbText="Streamline your finances, empower your team, and make decisions with clarity" mainCls="tf-spacing-10" breadcrumbImage="/images/section/account-hero.svg">
				<AccountingPayrollAutomation />
			</Layout>
		</>
	)
}