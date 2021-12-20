import { Card } from "antd";

const Errormessage = function () {
  return (
    <div>
      <Card style={{ width: 320 }}>
        <h2>Oooopsie</h2>
        <p>
          Something went wrong. We are working on getting this fixed as soon as
          we can. You may be able to try again later.
        </p>
      </Card>
    </div>
  );
};

export default Errormessage;
