### 组件介绍
**“数据预处理”（Preprocess）**控件支持选定一系列的预处理方法对数据集进行预处理。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：预处理后的数据
  - pre：预处理方法

<hr/>


### 页面介绍
点击**“数据预处理”（Preprocess）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/preprocess/param1.png) ](/img/aistudio/preprocess/preprocess/param1.png)

[ ![](/img/aistudio/preprocess/preprocess/param2.png) ](/img/aistudio/preprocess/preprocess/param2.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>添加预处理</td> 
      <td>
      预处理选项中有多种处理方式，用户可以按照自己的需求选择使用何种预处理数据的手段。并且其按照顺序执行预处理方法。
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“数据预处理”（Preprocess）**控件对数据集进行预处理，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/preprocess/workflow.png) ](/img/aistudio/preprocess/preprocess/workflow.png)

案例中加载 bridges 数据集，选择“连续化处理”，“缺失值处理”，“数据混淆”对数据集进行预处理，其中各处理的参数设置为默认设置。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/preprocess/preprocess/workflow-result.png) ](/img/aistudio/preprocess/preprocess/workflow-result.png)