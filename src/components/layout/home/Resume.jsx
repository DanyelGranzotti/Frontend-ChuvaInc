import React, { useState } from "react";

import * as S from "../../styles/layout/home/Resume.styled";

const Resume = () => {
  const [showMore, setShowMore] = useState(false);

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend lectus nec lectus congue, id pellentesque magna congue. Donec auctor tincidunt quam in lacinia. Nam aliquet nisl a scelerisque varius. Nulla ultricies justo eu turpis gravida, sodales rhoncus dui suscipit. Integer dapibus rutrum massa a efficitur. Suspendisse porta ex leo, eu dictum lectus ultrices sed. Curabitur malesuada porttitor nulla vel iaculis.

Nam vitae nunc vel eros malesuada dictum sit amet a nunc. Proin at ante eros. Morbi euismod eleifend dolor ut consequat. Cras et mollis eros. Etiam fringilla est nec massa posuere posuere. Nullam nisl orci, tempor fringilla viverra nec, venenatis eu orci. Nullam sit amet nulla id massa egestas euismod et eget felis. Morbi ac malesuada felis.

Nullam vestibulum ullamcorper finibus. Integer tincidunt eros convallis leo hendrerit accumsan. Aliquam hendrerit tellus et tincidunt iaculis. Duis euismod posuere massa, nec malesuada nisi facilisis in. Nulla elementum diam in turpis tempus consectetur. Pellentesque non lacus sed turpis euismod ornare ut eget lacus. Vestibulum ultrices leo vitae facilisis blandit. Quisque dapibus, lorem et iaculis semper, velit ante accumsan leo, ut sagittis est turpis ut quam. Mauris vulputate euismod elementum. Nullam cursus nec nisl ac tincidunt. Nullam fringilla pretium arcu, a efficitur neque tincidunt a. Ut id risus id leo tempor ornare. Quisque ultricies pretium dignissim. Mauris vitae nunc in erat placerat efficitur quis condimentum lectus. Integer scelerisque dapibus volutpat.

Maecenas sit amet neque pulvinar, ullamcorper nisl at, hendrerit libero. Nunc ante est, condimentum eget ante ac, condimentum dictum neque. Nulla ultricies finibus enim nec dignissim. Vivamus congue ipsum id congue fringilla. Aliquam ultricies luctus risus eu fermentum. Vivamus vitae imperdiet mauris, sit amet ornare purus. Nulla dictum euismod risus eget euismod. Suspendisse lobortis, nibh hendrerit finibus sollicitudin, neque urna placerat neque, blandit sagittis magna justo eget lorem. Nulla laoreet pellentesque tortor non dapibus.

Ut a placerat velit. Proin ut augue vitae lacus faucibus commodo eu id nulla. Morbi eget dolor leo. Praesent pellentesque lacus non nisi tincidunt, in facilisis enim egestas. Nam accumsan ultrices tortor, a ultrices metus fermentum quis. Donec tellus risus, dapibus at fringilla sed, interdum at nibh. Donec euismod lectus lacus, eget pellentesque leo hendrerit sit amet. Cras vitae elit mattis, volutpat massa ut, porta ex. Vestibulum commodo nunc in lacus scelerisque tempor. Nulla auctor commodo felis non semper. Praesent tempor, justo sed porta aliquet, enim elit lacinia turpis, non condimentum sapien nunc nec nulla.
  `;

  return (
    <S.ResumeContainer>
      <h1>Resumo</h1>

      <p>
        {showMore ? text : `${text.substring(0, 810)}`}
        <button className="btn" onClick={() => setShowMore(!showMore)}>
          {showMore ? "ver menos" : "ver mais"}
        </button>
      </p>
    </S.ResumeContainer>
  );
};

export default Resume;
