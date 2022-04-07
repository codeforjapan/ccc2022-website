import { Box, Container } from '@chakra-ui/react'

import AppSectionTitle from '@/components/AppSectionTitle'
import AppButtonApplicationForm from '@/components/AppButtonApplicationForm'
import styles from '@/styles/Guideline.module.scss'

const IndexGuidelines = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Box
        as={'section'}
        className={styles.GuideLine}
        style={{ padding: '0 24px' }}
      >
        <AppSectionTitle enTitle="Guidelines" jaTitle="募集要項" />
        <Box className={styles.GuideLineCard}>
          <h3>
            <b>募集対象</b>
          </h3>
          <ul>
            <li>
              <b>
                解決したい社会課題（分野や内容は問わない）があり、それに対するアイデアを持っている方
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                自分の持つスキル（プログラミングやデザインを含むがこれに限らない）を、社会課題の解決に活かしたい方
              </b>
            </li>
          </ul>
          <p>
            <b>
              ※未経験で、これから学びながら開発に参加していく人も含むので、応募時点でのレベルを問うものではありません。
            </b>
          </p>
          <hr />
          <h3>
            <b>応募資格</b>
          </h3>
          <ul>
            <li>
              <b>
                2000年4月2日以降生まれの方、または学生の方（大学の場合学部4年まで。社会人学生のぞく）
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                現在の自身のスキルレベルにかかわらず、チームに意欲的に参加し、開発を通じてスキルアップする意思のある方
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>Code for Japan の&nbsp;</b>
              <b>
                <a href="https://github.com/codeforjapan/codeofconduct">
                  Code of Conduct&nbsp;
                </a>
              </b>
              <b>と&nbsp;</b>
              <b>
                <a href="https://www.code4japan.org/privacy-policy">
                  プライバシーポリシー&nbsp;
                </a>
              </b>
              <b>に同意いただける方</b>
            </li>
          </ul>
          <hr />
          <h3>
            <b>開発形態</b>
          </h3>
          <ul>
            <li>
              <b>
                参加を希望する方は、全員エントリーフォームからの応募が必要となります。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                エントリーした人がチーム（2～6人）を結成して、チーム開発し、作品を提出していただきます。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                チーム組成は、エントリー時点で友人知人と予め組んでいても構いませんし、個人でエントリーしたあとに参加者同士でコミュニケーションをとって、チームを組むことも可能です。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                「いずれの場合でも、チームメンバー全員で協力して「チーム開発」をすることが求められます。個人（1人だけ）で開発し、提出することは認められていません。
              </b>
            </li>
          </ul>
          <h3>
            <b>応募作品について</b>
          </h3>
          <p>
            <b>応募作品は下記のいずれか又は複数の組み合わせとします。</b>
          </p>
          <ul>
            <li>
              <b>Windows・macOS上で動作するソフトウェア</b>
            </li>
          </ul>
          <ul>
            <li>
              <b>Android・iOS上で動作するアプリ</b>
            </li>
          </ul>
          <ul>
            <li>
              <b>Webアプリ</b>
            </li>
          </ul>
          <ul>
            <li>
              <b>その他、IoTデバイス等を利用した作品（※）</b>
            </li>
          </ul>
          <p>
            <b>※ IoTデバイス等を利用する場合は事前にお知らせください。</b>
          </p>
          <ul>
            <li>
              <b>使用するプログラミング言語やAPI等は問いません。</b>
            </li>
          </ul>
          <hr />
          <h3>
            <b>備考</b>
          </h3>
          <ul>
            <li>
              <b>
                他のプログラミングコンテスト等との併願を認めますが、併願先で多重応募に関する規定がある場合はそちらに従ってください。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                作品の応募にあたり、他者の知的財産権を侵害しないように十分ご注意ください。また、応募者と第三者との間でトラブルが発生した場合は、当事者間で解決を図るものとし、Civictech
                Challenge Cup U-22 運営及びCode for
                Japanは一切関与いたしません。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>
                本イベントでは、Slackを活用して各種連絡・情報共有を行う予定です。
              </b>
            </li>
          </ul>
          <ul>
            <li>
              <b>エントリーにあたって質問等がある場合は、</b>
              <b>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeMSV1KPCzKGHoq1D9W1TbrEO4hWlZMywTxF__xxYYjbKnCrA/viewform">
                  お問い合わせフォーム
                </a>
              </b>
              <b>よりご連絡ください。</b>
            </li>
          </ul>
        </Box>
        <AppButtonApplicationForm />
      </Box>
    </Container>
  )
}

export default IndexGuidelines
