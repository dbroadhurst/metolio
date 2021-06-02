import Head from 'components/head'

import ImageLoader from 'components/imageLoader'
import { formatDate } from 'utils/utils'

import { bio, BioInfo } from 'data/bio'

export default function Resume({ bio }: { bio: BioInfo }) {
  function InfoRow() {
    return (
      <div className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2">
          <div className="p-d-flex p-jc-center p-jc-lg-end p-mr-0 p-mr-lg-2">
            <div style={{ width: 128, height: 128 }}>
              <ImageLoader src={bio.avatarImage} alt="Avatar" />
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-10">
          <h3 style={{ fontWeight: 'bold' }}>{bio.name}</h3>
          <h4 className="p-mt-2">{bio.title}</h4>
          <div className="p-mt-2">{bio.summary}</div>
          <small className="">{bio.email}</small>
        </div>
      </div>
    )
  }

  function SkillsRow() {
    return (
      <div className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2"></div>
        <div className="p-col-12 p-lg-10">
          <h3 style={{ fontWeight: 'bold' }}>Skills</h3>
          <div className="p-mt-2">
            {bio.skills.map((skill: any, index: number) => (
              <div key={index} className="p-ml-2">
                <span>• </span>
                <span style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>{skill.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function JobRow() {
    return (
      <div className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2"></div>
        <div className="p-col-12 p-lg-10">
          <h3 style={{ fontWeight: 'bold' }}>Job Experience</h3>
        </div>
      </div>
    )
  }

  function JobsRow({ job, index }: { job: any; index: number }) {
    return (
      <div key={index} className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2">
          <div className="p-d-flex p-flex-column p-ai-end p-mr-2">
            <small>{job.company}</small>
            <small>{`${formatDate(job.startDate)} - ${job.endDate ? formatDate(job.endDate) : 'Present'}`}</small>
          </div>
        </div>
        <div className="p-col-12 p-lg-10">
          <div className="p-grid p-dir-row p-col-12">
            <div className="p-d-flex p-align-center">
              <h5 className="role">{job.title}</h5>
            </div>
          </div>
          <div className="p-mb-2">{job.summary}</div>
          {job.details?.map((detail: any, index: number) => (
            <div key={index} className="p-ml-2">
              <span>• </span>
              <span style={{ fontStyle: 'italic', fontSize: '0.85rem' }}>{detail.description}</span>
            </div>
          ))}
        </div>
      </div>
    )
  }

  function EducationRow() {
    return (
      <div className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2"></div>
        <div className="p-col-12 p-lg-10">
          <h3 style={{ fontWeight: 'bold' }}>Education</h3>
          <div className="p-mt-2">
            {bio.education?.map((course: any, index: number) => (
              <div key={index}>
                <span>{course.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  function OtherRow() {
    return (
      <div className="p-grid p-dir-row p-col-12">
        <div className="p-col-12 p-lg-2"></div>
        <div className="p-col-12 p-lg-10">
          <h3 style={{ fontWeight: 'bold' }}>Other</h3>
          <div className="p-mt-2">
            {bio.other?.map((other: any, index: number) => (
              <div key={index}>
                <span>{other.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head title={`${bio.name}`} desc={`${bio.name} Metolio Resume`} image={bio.resumeThumbBannerImage} />

      <div style={{ background: 'var(--surface-a)' }} className="p-grid p-dir-column p-m-4 p-p-4 p-shadow-2">
        <InfoRow />
        <SkillsRow />
        <JobRow />

        {bio.jobs.map((job: any, index: number) => (
          <JobsRow key={index} index={index} job={job} />
        ))}

        <EducationRow />
        <OtherRow />
      </div>
    </>
  )
}

export async function getStaticProps(context: any) {
  return {
    props: { bio },
  }
}
