### 组件介绍
**“编辑属性类型”（Change Domain）**控件用于用户修改属性类型。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“编辑属性类型”（Change Domain）**控件查看参数配置页面，如下图所示：  
![param](/img/aistudio/feature-engineering/change-domain/param.png)

点击**“打开控件配置”**按钮，弹出条件配置页面，添加过滤条件：  
![interaction](/img/aistudio/feature-engineering/change-domain/interaction.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>文本类型</td> 
      <td>
      文本类型（Text），转换为文本类型后，属性变为描述属性
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>离散类型</td> 
      <td>
      离散类型（Categorical）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数值类型</td> 
      <td>
      数值类型（Numeric）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>日期类型</td> 
      <td>
      日期类型（Datetime）
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“数据信息”（Data Info）**控件查看加载数据的信息，同时使用**“编辑属性类型”（Change Domain）**控件修改数据集的属性类型设置，之后通过**“数据信息”（Data Info）**控件查看处理后的数据集。   
![workflow](/img/aistudio/feature-engineering/change-domain/workflow.png)

案例中加载 iris 数据集，设置【iris】为文本类型，设置【sepal length】和【sepal width】设置为离散类型。案例中控件的配置以及执行结果如下图所示。  
![workflow-result](/img/aistudio/feature-engineering/change-domain/workflow-result.png)