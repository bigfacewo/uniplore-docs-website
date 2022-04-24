### 组件介绍
**“编辑属性值”（Edit Domain）**控件用于修改数据集的值域，允许用户对传入数据集的属性名及值域进行修改。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“编辑属性值”（Edit Domain）**控件查看参数配置页面，如下图所示：  
![param1](/img/aistudio/preprocess/edit-domain/param1.png)

![param2](/img/aistudio/preprocess/edit-domain/param2.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性选择</td> 
      <td>
      选择需要编辑的属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>编辑</td> 
      <td>
      选择属性后，可修改属性名称，对于离散属性可以在取值列表框中对取值进行修改
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据集，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“编辑属性值”（Edit Domain）**控件对数据集的值域进行修改，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。
![workflow](/img/aistudio/preprocess/edit-domain/workflow.png)

案例中加载 iris 数据集，修改【iris】属性的值。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/preprocess/edit-domain/workflow-result.png)