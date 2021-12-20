import { Pagination, ScholarshipCard } from "../../components";

const createScholarshipList = (pageInformation, dataScholarship) => {
  if (pageInformation.total_data > 0) {
    return dataScholarship.map((scholarship) => {
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
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-sm-8 bg-danger rounded-3 text-center p-2 mt-5">
          <p className="text-white m-0">Belum ada beasiswa tersedia.</p>
        </div>
      </div>
    )
  }
}

const createPagination = (pageInformation, counter, setCounter) => {
  const {total_data, per_page, current_page} = pageInformation;
  const total_page = Math.ceil(total_data/per_page);

  const previous = () => {
    setCounter(counter <= 1 ? 1 : (counter - 1));
  }
  
  const next = () => {
    setCounter(counter >= total_page ? total_page : (counter + 1));
  }

  if (total_data > 0) {
    return (
      <Pagination 
        previous={previous}
        next={next}
        current_page={current_page}
        total_page={total_page}
      />
    );
  } else {
    return undefined;
  }
}

const addScholarshipButtonCreator = (user) => {
  if (user) {
    return (
      <a href="/add-scholarship" className="btn btn-primary">
        Tambah Informasi Beasiswa
      </a>
    );
  } else {
    return (
      <a href="/login" className="btn btn-primary">
        Masuk Untuk Tambah Beasiswa
      </a>
    );
  }
}

export {
  createScholarshipList,
  createPagination,
  addScholarshipButtonCreator,
}