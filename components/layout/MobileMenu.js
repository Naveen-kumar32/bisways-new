'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function MobileMenu() {
	const [activeAccordion, setActiveAccordion] = useState(null)
	const pathname = usePathname()

	const toggleAccordion = (key) => {
		setActiveAccordion((prev) => (prev === key ? null : key))
	}

	const isActive = (path) => (pathname === path ? "current" : "")
	const isParentActive = (paths = []) => paths.some((path) => pathname.startsWith(path)) ? "active" : ""

	const menuItems = [

		{ title: "Home", path: "/" },
		{ title: "About", path: "/about-us" },	
		{
			title: "Services",
			subMenu: [
				{ title: "Virtual CFO Services", path: "/virtual-cfo" },
				{ title: "Business Registration & Startup Setup", path: "/businessregistration-startup-setup" },
				{ title: "GST, Taxation & Audit Support", path: "/gst-taxation-audit" },
				{ title: "ROC, MCA & Compliance Filings", path: "/roc-mca-company-compliance" },
				{ title: "Trust, NGO & CSR Consulting", path: "/trust-ngo-csr-support" },
				{ title: "Business Structuring & Advisory", path: "/business-structuring-advisory" },
				{ title: "Digital, API & eCommerce Consulting", path: "/digital-api-e-commerce-consulting" },
				{ title: "Accounting, Payroll & Automation", path: "/accounting-payroll-automation" }
			]
		},
		{ title: "blog", path: "/blog-standard" },
		
		{ title: "Contact", path: "/contact" }
	]
	
	return (
		<ul id="menu-mobile-menu" className="menu">
			{menuItems.map((item, index) => {
				const parentActiveClass = isParentActive(item.subMenu?.map(i => i.path) || [])
				const isSubmenuActive = item.subMenu?.some((sub) => isActive(sub.path) === "current")
				const isOpen = activeAccordion === index || isSubmenuActive

				return (
					<li key={index} className={`menu-item menu-item-has-children-mobile  ${item.subMenu ? "menu-item-has-children-mobile" : ""} ${parentActiveClass}`}>
						<Link className={`item-menu-mobile ${isActive(item.path)}`} href={item.path || "#"}>
							{item.title}
							{item.subMenu && (
								<i className={`icon-chevron-down ${isOpen ? "open" : ""}`} onClick={() => toggleAccordion(index)} />
							)}
						</Link>
						{item.subMenu && (
							<ul className="sub-menu-mobile" style={{ display: isOpen ? "block" : "none" }}>
								{item.subMenu.map((sub, subIndex) => (
									<li key={subIndex} className={`menu-item ${isActive(sub.path)}`}>
										<Link href={sub.path}>{sub.title}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				)
			})}
		</ul>
	)
}
