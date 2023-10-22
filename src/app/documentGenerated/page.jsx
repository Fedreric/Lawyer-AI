import React from 'react';

const DocumentGenerated = () => {
  return (
    <div className=" flex-auto p-4 space-y-8 bg-bg-custom-color">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Your new resume</span>
          <span className="label-text-alt">Info from your resume</span>
        </label>
        <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text-alt">Your bio</span>
          <span className="label-text-alt">Alt label</span>
        </label>
        <button className="btn btn-primary bg-custom-color-dark">Download</button>
      </div>
    </div>
  );
};

export default DocumentGenerated;
