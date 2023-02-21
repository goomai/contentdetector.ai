import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import SectionFour from "./SectionFour";
import Testimonials from "./Testimonials";

function OurMotive({ styles }) {
  return (
    <div>
      <div className={`${styles.primary_bg} `}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Best AI content Detector and ChatGPT Plagiarism Detector
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              ContentDetector.AI identifies any written text material that is AI
              generated, including Chat GPT and GPT 3 written content, and
              delivers an estimated percentage score based on the likelihood
              that the text content was generated by AI tools or software. In
              addition to that, it can count words and is completely free to
              use.
            </p>
            <p className={styles.section_desc}>
              This online AI content detector is not only easy to use but also
              has a lot of functionality and most importantly, it's a free AI
              content detector. It is a ChatGPT plagiarism detector, a GPT 3
              content detector, and a Jarvis AI content detector. You only need
              to copy and paste the content into the text field to check.
            </p>
            <p className={styles.section_desc}>
              Thousands of users like our application, and it is used by
              bloggers and academics to identify any article containing
              AI-generated stuff.
            </p>
            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <Testimonials styles={styles} />

      <div className={`${styles.primary_bg}`}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            How AI Content Detection Works?
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              It is difficult to detect any kind of content, but it is almost
              impossible to get an accuracy rate close to 100% when detecting AI
              content. This detection model was developed by combining and
              fine-tuning the results of Open AI's GPT 2 model with the outputs
              of a robustly optimized BERT pretraining approach (Roberta) model.
              To determine whether the content was created by AI, users need to
              utilize this tool along with their judgment.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>

      <div className={`${styles.secondary_bg}`}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Can Google Detect AI Written Content?
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Yes, it is quite likely that Google has the technology needed to
              identify the written text produced by AI. The artificial
              intelligence (AI) technology that Google uses might be the most
              advanced in the world.
            </p>
            <p className={styles.section_desc}>
              The latest generation of big language models, such as the one used
              by ChatGPT, known as GPT 3, is founded on a technology referred to
              as “Transformers,” which was released to the public by Google
              only. Google also puts out the most academic papers each year on
              the topics of AI and ML.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <div className={`${styles.primary_bg} `}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Will Google penalize AI content?
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Google will not penalize content simply because AI generates it.
              However, the search engine giant has made it clear that it
              prioritizes high-quality content that provides value to users. If
              AI-generated content fails to meet these criteria, it may not rank
              well in search results.
            </p>
            <p className={styles.section_desc}>
              As such, it's essential to ensure that AI-generated content is
              well-written, informative, and adds value to users. If the content
              is helpful and meets{" "}
              <Link
                href="https://developers.google.com/search/blog/2023/02/google-search-and-ai-content"
                target="_blank"
                rel="noreferrer"
                style={{ color: "blue", textDecoration: "underline" }}
              >
                Google's guidelines for helpful content
              </Link>
              , there should be no penalty from Google.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <div className={`${styles.secondary_bg} `}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            AI Detector for Bloggers
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Bloggers or Content Publishers can use ContentDetector.AI to
              detect AI content. When you are working with external or internal
              writers, you need to check if the writers are using any AI writer
              to write the content. Google or other Search Engines probably can
              detect AI Content. Any spam content is against their guidelines,
              In fact Google has released two helpful content updates this year
              which target spam content. However AI written content might or
              might not be spam and it totally depending how the AI tool is
              used.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <SectionFour styles={styles} />

      <div className={`${styles.secondary_bg} `}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            Word Counter
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              Writers, students, and professionals need ContentDetector.AI's
              word counter. With a few clicks, you can count the words in your
              writing. Copy and paste your content into the text area for a
              quick word count. This tool helps authors satisfy word count
              requirements for articles, essays, and reports.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
      <div className={`${styles.primary_bg} `}>
        <div
          className={`${styles.padding_vertical_lg} ${styles.margin_horizontal_sm} `}
        >
          <p className={`${styles.sub_heading} ${styles.margin_horizontal_md}`}>
            ContentDetector.AI vs Other Detectors
          </p>
          <div className={styles.layout_spacing}>
            <p className={styles.section_desc}>
              ContentDetector.AI is a tool that stands out in the market,
              offering a unique combination of AI detection and word-counting
              features in a user-friendly package. This tool is equipped with
              editing options and presents the AI detection results in a clear
              and visually appealing percentage form without any character limit
              restrictions.
            </p>

            {/* <Button className={styles.analyse_btn}>Read more</Button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMotive;
