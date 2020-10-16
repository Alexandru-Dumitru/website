#assign vars
component_dir=./src/pages/$1
component_file=$component_dir/$1.component.jsx
component_style=$component_dir/$1.styles.scss

#create dir
mkdir $component_dir
#create files
touch $component_file
touch $component_style
#update jsx file with basic imports
echo 'import React from "react";' > $component_file
echo "" >> $component_file
echo 'import "./'$1'.styles.scss";' >> $component_file

#TODO: add conditional processing to check if folder and files exit