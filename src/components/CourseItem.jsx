import React from "react";

export default function CourseItem(props) {
  const { course } = props;
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function convertFromStringToDate(responseDate) {
    // Because dd/mm/yyyy is not the template string which is acceptable in ISO 8061
    let datePieces = responseDate.split("/");
    return new Date(datePieces[2], datePieces[1] - 1, datePieces[0]);
  }
  const isNew = () => {
    const months_accept = 3;
    const now = new Date();
    // Accurate calculation to each day
    return (
      new Date(now - convertFromStringToDate(course.ngayTao)).getMonth() <=
      months_accept
    );
  };
  console.log(isNew());
  return (
    <div className="course-item">
      <div className="course">
        <div className="wallpaper w-100">
          <img src={course.hinhAnh} alt="bg-course" />
          <div className="overflow">
            <div className="ct-wallpaper">
              <h3 className="title-course">{course.tenKhoaHoc}</h3>
              <p className="topic-course">
                {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="detail-course">
            {isNew() && <div className="status">New</div>}
            <div className="original">
              <div className="teacher ">
                <img
                  src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                  alt="avatar"
                />
                <div className="teacher-info">
                  <label>Giảng viên</label>
                  <h5>{course.nguoiTao.hoTen}</h5>
                </div>
              </div>
              <div className="student ">
                <i className="fa fa-mortar-board"></i>
                <div className="student-info">
                  <label>Học viên</label>
                  <h5>{course.soLuongHocVien}</h5>
                </div>
              </div>
              <div className="price">${getRndInteger(50, 150)}</div>
            </div>
            <div className="hover">
              <p className="date">Ngày khởi tạo: {course.ngayTao}</p>
              <h3 className="name">{course.tenKhoaHoc}</h3>
              <p className="topic-name">
                {" "}
                {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
              </p>

              <div className="d-flex content">
                <div className="teacher">
                  <img
                    src="https://i0.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100&ssl=1"
                    alt="avatar"
                  />
                  <div className="teacher-info">
                    <label>Giảng viên</label>
                    <h5>{course.nguoiTao.hoTen}</h5>
                  </div>
                </div>
                <div className="price">${getRndInteger(50, 150)}</div>
              </div>

              <span className="icon">
                <i className="fa fa-eye"></i>
                {course.luotXem} |<i className="fa fa-mortar-board"></i>
                {getRndInteger(100, 999)} |<i className="fa fa-heart"></i>
                {getRndInteger(20, 150)}
              </span>
              <p className="description">{course.moTa}</p>
              <div className="btn-group">
                <button className="btn btn-detail">CHI TIẾT</button>
                <button className="btn btn-add">THÊM GIỎ HÀNG</button>
                <div className="like">
                  <div className="HeartAnimation"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
