import React from "react";
import { Link } from "react-router-dom";

export default ({ id }) => <Link to={`/${id}`}>{id}</Link>;
