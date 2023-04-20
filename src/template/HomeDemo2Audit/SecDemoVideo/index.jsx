import SectionHeading from '../../../components/SectionHeading'
import SecVideoArea from './SecVideoArea'
import cruxaudit from './../crux_audit.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { useState, useEffect } from 'react'
import { Button } from 'bootstrap'
import SingleFAQArea from './../SecFAQ_Timeline/SingleFAQArea'

const SecDemoVideo = ({ img }) => {
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    if (pageNumber < 1) {
      setPageNumber(23)
    }
    if (pageNumber > 23) {
      setPageNumber(1)
    }
  }, [pageNumber])

  return (
    <div className="bgpreto" id="gameplay">
      <div className="container" style={{ paddingTop: '120px' }}>
        <section className="demo-video section-before section-padding-100">
          {' '}
          <SectionHeading
            data-aos="fade-up"
            data-aos-delay="300"
            title={[
              'CRUX Audit by ',
              <span style={{ color: '#E6791B' }}> Fusion Tech </span>,
            ]}
            text2="It is important for us to secure the ecosystem for everybody. That is why we had the CRUX Smart Contract audited by FusionTech."
          />
          <div
            style={{ width: '100%', textAlign: 'center', marginTop: '-40px' }}
          >
            <a
              href="https://github.com/fusiontechofficial/Smart-Contract-Audits/blob/main/CRUX/CRUX%20-%20Audit.pdf"
              className="btn dream-btn3 "
              style={{ backgroundColor: '#E6791B', margin: '0 auto' }}
            >
              OPEN AUDIT
            </a>
          </div>
          <div
            style={{ width: '100%', textAlign: 'center', paddingTop: '60px' }}
          >
            <h1>Acknowledged by CRUX</h1>
            <p style={{ color: 'black' }}>
            Our team has reviewed the audit report and is currently addressing each of the findings.
            </p>
          </div>
          <div
            className="dream-faq-area"
            style={{ width: '90%', paddingTop: '40px', margin: '0 auto' }}
          >
            <div className="panel-group" id="accordionFourLeft">
              <dt className="wave" data-toggle="collapse">
                01 | Centralization Risk in Function
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Over time, the contract owner will accumulate LP tokens, giving
                them control of a significant portion of the liquidity. However,
                our liquidity is locked with a publicly visible lock, and our
                intention is to always keep it locked to ensure investor safety.
                The lock is implemented through a smart contract function,
                making it impossible for anyone, including the owner, to
                withdraw the liquidity even if their account is stolen. This
                way, we can protect both our investors and liquidity.
              </p>
              <dt className="wave" data-toggle="collapse">
                02 | Centralization Risk in Function
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Our contract includes functions that may need to be adjusted to
                align with our long-term vision. These adjustments will always
                be made with the consensus of the community. Examples of these
                functions include the ability to change the fee structure and
                the address of the growth fund.
              </p>
              <dt className="wave" data-toggle="collapse">
                03 | Contract Gains Non-withdrawable BNB via the _owner Function
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                The team acknowledges that our contract has been deployed and is
                now immutable. In order for the leftover BNB to have a high
                value, there needs to be a large volume of transactions.
              </p>
              <dt className="wave" data-toggle="collapse">
                04 | Regaining Ownership After Renouncing the Contract Ownership
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Our smart contract ownership will only be changed if we decide
                to renounce ownership, which is not our plan as we need to
                control the functions mentioned above. Even if we were to
                renounce ownership, there would be no "lock" call.
              </p>
              <dt className="wave" data-toggle="collapse">
                05 | Initial Token Distribution
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                When the contract is created, all of the supply goes to the
                owner even before any sale or liquidity call is made. Our
                distribution follows the tokenomics metrics and includes vesting
                locks as stated.
              </p>
              <dt className="wave" data-toggle="collapse">
                06 | Lack of Return Value Handling
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                07 | Potential Sandwich Attacks
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                08 | Lack of Error Message
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                09 | Redundant Code
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                10 | Typos In The Contract
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                11 | Function and VariableNaming Doesn’t Match the
                OperatingEnvironment
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                12 | Potential Resource Exhaustion
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
              <dt className="wave" data-toggle="collapse">
                13 | Inconsistency Between Comment and Code
              </dt>
              <p style={{ color: 'black', marginTop: '12px' }}>
                Understood. It won't have an impact on the project. It's a minor
                issue.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SecDemoVideo
