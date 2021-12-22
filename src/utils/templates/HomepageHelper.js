import { ScholarshipCard } from "../../components";

const createScholarshipCards = (scholarshipArr) => {
  return scholarshipArr.map((scholarship) => {
    return (
      <div className="col-md-4">
        <ScholarshipCard
          key={scholarship._id}
          title={scholarship.title}
          deadline={scholarship.deadline}
          poster={`http://localhost:4000/v1/${scholarship.poster}`}
          description={scholarship.description}
          name={scholarship.author.name}
          id={scholarship._id}
        />
      </div>
    );
  });
};

const createEmptyScholarship = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
        <p className="text-white m-0">Belum ada beasiswa tersedia.</p>
      </div>
    </div>
  );
};

const createScholarshipCardCheck = (arr) => {
  if (arr.length > 0) {
    return createScholarshipCards(arr);
  } else {
    return createEmptyScholarship();
  }
}

export {
  createScholarshipCardCheck,
}