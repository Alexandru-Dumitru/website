#assign vars
component_dir=./src/components/$1
component_file=$component_dir/$1.tsx
component_style=$component_dir/$1.css

#create dir
mkdir $component_dir
#create files
touch $component_file
touch $component_style
#update tsx file with basic imports
echo 'import React from "react";' > $component_file
echo "" >> $component_file
echo 'import "./'$1'.css";' >> $component_file

#TODO: add conditional processing to check if folder and files exit