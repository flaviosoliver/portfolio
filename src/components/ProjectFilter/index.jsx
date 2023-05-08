/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import * as dataAPI from '../../services/dataAPI';
import '../../assets/styles/ProjectFilter.css';

const animatedComponents = makeAnimated();

export default function ProjectFilter({ onFilter }) {
  const [projects, setProjects] = useState([]);
  const [stacks, setStacks] = useState();
  const [initialListStacks, setInitialListStacks] = useState();
  const [filteredProjects, setFilteredProjects] = useState();
  const [selectedStacks, setSelectedStacks] = useState('');

  useEffect(() => {
    setProjects(dataAPI.getAllProjects());
  }, []);

  useEffect(() => {
    dataAPI.newGetAllStacks().then((data) => {
      setStacks(data);
      setInitialListStacks(data);
    });
  }, []);

  useEffect(() => {
    if (selectedStacks) {
      projects.then((result) => {
        const filtered = result.filter((project) =>
          selectedStacks.some((stack) => project.stack.includes(stack))
        );
        setFilteredProjects(filtered);
        onFilter(filtered);
      });
    }
  }, [onFilter, projects, selectedStacks]);

  function transformArray(arr) {
    return Array.from(arr, (option) => option.value);
  }

  const onChangeSelectedStacks = (e) => {
    const selectedValues = transformArray(e);
    const defaultValues = transformArray(initialListStacks);
    if (selectedValues.length > 0) {
      setSelectedStacks(selectedValues);
    } else {
      setSelectedStacks(defaultValues);
    }
  };

  return (
    <div className="project-filter-content">
      <Select
        isMulti
        name="colors"
        options={stacks}
        className="basic-multi-select custom-filter-select"
        classNamePrefix="select"
        components={animatedComponents}
        placeholder="Selecione as Stacks desejadas..."
        onChange={onChangeSelectedStacks}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#75b8ff',
          },
        })}
      />
    </div>
  );
}
