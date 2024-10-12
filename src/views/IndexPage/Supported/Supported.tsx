import type { TTool } from '@/api/routerApi.types'
import { Section } from '@/components/layout'
import { Tab } from '@headlessui/react'
import cx from 'classnames'
import { ToolsBlock } from './components'
import { useTools } from './hooks'
import styles from './Supported.module.scss'

const tabLabels = ['Ph1', 'Ph2', 'Ph3', 'Ph4', 'Ph5']

const phaseDetails = {
  Ph1: {
    title: 'Phase 1: Development and Setup',
    details: `
      Web3 Access Point; Dashboard for owners & users, deployed on Sol blockchain.
      Web2 Access Point; Web-app interaction, wallet connect, no trackers.
      Ecosystem; Liquidity cold-wallet, converting tokens and fees.
      White-paper outlines objective vision.
      Goal: MVP deployment functionality for clients and users.
    `,
  },
  Ph2: {
    title: 'Phase 2: Liquidity & Expansion',
    details: `
      Web3 digital liquidity for crypto-ATMs with optimized algorithms.
      Expand platform wallets & currencies.
      Exchange algorithms for efficient transactions.
      Develop BTMS (Stable Coin) and BTMA (Payout Coin).
      Integrate 9+ payment aggregators.
      Goal: Global launch of liquidity pool for enhanced operations.
    `,
  },
  Ph3: {
    title: 'Phase 3: Contracts & Expansion',
    details: `
      Strategic partnerships, proprietary machine manufacturing, and advertising.
      Expand brand identity and ecosystem.
      Goal: Optimize client onboarding with new machine software.
    `,
  },
  Ph4: {
    title: 'Phase 4: Compliance & Operations',
    details: `
      BTM-TECH dashboard for Canadian, US, and global compliance.
      Produce Canadian Regulatory Memo for international credibility.
      Goal: Establish BTM-TECH as a compliant, global entity.
    `,
  },
  Ph5: {
    title: 'Phase 5: Manufacturing & Deals',
    details: `
      Manufacture house BTMs, proprietary dashboard, and advertising.
      Pivot into crypto exchange, cold-wallet, and digital ecosystem.
      Goal: Close deals with casinos and real estate firms.
    `,
  },
}

function Supported() {
  const { filteredTools } = useTools()

  return (
    <Section>
      <div className="ml-2.5 mb-10 lg:ml-0">
        <h2 className={styles.title}>BTM Roadmap</h2>
        <p className={styles.subtitle}>Roadmap subheader</p>
      </div>
      <div className={styles.demo}>
        <Tab.Group defaultIndex={2}>
          <Tab.List className={styles.header}>
            {tabLabels.map(label => (
              <Tab key={label} className={({ selected }) => cx(styles.button, selected && styles.activeButton)}>{label}</Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={styles.content}>
            {tabLabels.map((label, index) => (
              <Tab.Panel key={label} className="flex flex-wrap gap-4">
                <div className={styles.phaseCard}>
                  <h3>{phaseDetails[label]?.title}</h3>
                  <p>{phaseDetails[label]?.details}</p>
                </div>
                <ToolsBlock tools={filteredTools[label]} />
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className={styles.description}>
          <h3 className={styles.lot}>Roadmap</h3>
          <p>Roadmap stuff</p>
        </div>
      </div>
    </Section>
  )
}

export { Supported }
