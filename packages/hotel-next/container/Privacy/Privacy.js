import React from 'react';
import Container from '@iso/ui/UI/Container/Container';
import Heading from '@iso/ui/Heading/Heading';
import PageWrapper from './Privacy.style';

export default function Privacy() {
  return (
    <PageWrapper>
      <Container>
        <Heading as="h2" content="Privacy Policy" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </strong>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Heading as="h4" content="This Policy describes:" />
        <ol>
          <li>1. How We Collect & Use Your Personal Data</li>
          <li>2. Cookies & Similar Technologies</li>
          <li>3. How We Disclose Personal Data</li>
          <li>4. How to Access & Control Your Personal Data</li>
          <li>5. How We Protect Your Personal Data</li>
          <li>6. How We Process Children’s Personal Data</li>
          <li>7. Third-Party Providers and Their Services</li>
          <li>8. International Transfers of Your Personal Data</li>
          <li>9. Updates to This Policy</li>
          <li>10. How to Contact Us</li>
        </ol>
        <Heading as="h2" content="1. How We Collect & Use Your Personal Data" />
        <p>
          Scelerisque mauris pellentesque pulvinar pellentesque habitant. Vitae
          auctor eu augue ut lectus arcu. Cum sociis natoque penatibus et magnis
          dis parturient montes nascetur. Ultricies tristique nulla aliquet enim
          tortor. Odio pellentesque diam volutpat commodo sed egestas egestas
          fringilla phasellus. Eget est lorem ipsum dolor sit amet consectetur
          adipiscing elit. Egestas tellus rutrum tellus pellentesque eu
          tincidunt tortor. Morbi tristique senectus et netus et malesuada. Sit
          amet purus gravida quis blandit turpis. Vitae et leo duis ut diam
          quam. Tincidunt ornare massa eget egestas purus viverra accumsan.
          Consectetur adipiscing elit pellentesque habitant morbi. Pellentesque
          massa placerat duis ultricies lacus. Libero enim sed faucibus turpis
          in eu. Nunc sed velit dignissim sodales ut eu sem integer vitae.
          Facilisis mauris sit amet massa vitae tortor condimentum. Sed felis
          eget velit aliquet sagittis id consectetur purus ut. Feugiat sed
          lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi.
          Molestie nunc non blandit massa enim nec. Morbi enim nunc faucibus a
          pellentesque sit amet porttitor. Risus commodo viverra maecenas
          accumsan lacus vel facilisis. Molestie at elementum eu facilisis sed
          odio morbi quis commodo. Enim ut sem viverra aliquet eget sit amet
          tellus cras. Commodo viverra maecenas accumsan lacus vel facilisis
          elit sed vulputate. Vitae congue mauris rhoncus aenean vel elit
          scelerisque. Volutpat sed cras ornare arcu dui vivamus arcu felis
          bibendum. Est velit egestas dui id ornare arcu odio ut. Risus feugiat
          in ante metus. Volutpat sed cras ornare arcu dui vivamus.
        </p>
        <p>
          Commodo viverra maecenas accumsan lacus vel facilisis elit sed
          vulputate. Vitae congue mauris rhoncus aenean vel elit scelerisque.
          Volutpat sed cras ornare arcu dui vivamus arcu felis bibendum. Est
          velit egestas dui id ornare arcu odio ut. Risus feugiat in ante metus.
          Volutpat sed cras ornare arcu dui vivamus.
        </p>
      </Container>
    </PageWrapper>
  );
}
