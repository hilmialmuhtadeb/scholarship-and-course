import { Button } from "reactstrap";
import { addScholarshipToFavorite, removeScholarshipFromFavorite } from "../FavoriteHandler";
import { deleteScholarship } from "../ScholarshipHandler";

const actionMenuCreator = (scholarship) => {
  return (
    <div className="d-flex align-items-center">
      <a href={`/add-scholarship/${scholarship._id}`} className="me-3">
        <Button size="sm" color="warning">Edit</Button>
      </a> | 
      <Button size="sm" color="danger" className="ms-3" onClick={() => deleteScholarship(scholarship)}>Hapus</Button>
    </div>
  );
}

const breadCrumbCreator = (scholarship) => {
  if(scholarship.category === 1) {
    return (
      <a href="/scholarships">
        Pendidikan
      </a>
    );
  } else {
    return (
      <a href="/courses">
        Kursus
      </a>
    )
  }
}

const favoriteButtonCreator = (isFavorited, user, scholarship) => {
  if (!isFavorited) {
    return (
      <Button color='primary' size="sm" className='my-4' outline block onClick={() => addScholarshipToFavorite(user, scholarship)}>Tambahkan ke Favorit</Button>
    );
  } else {
    return (
      <Button color='danger' size="sm" className='my-4' outline block onClick={() => removeScholarshipFromFavorite(user, scholarship)}>Hapus dari Favorit</Button>
    );
  }
}

const getDeadline = (scholarshipDeadline) => {
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
  const deadline = new Date(scholarshipDeadline);
  return `${deadline.getDate()} ${months[deadline.getMonth()]} ${deadline.getFullYear()}`;
}

export {
  actionMenuCreator,
  breadCrumbCreator,
  favoriteButtonCreator,
  getDeadline,
}