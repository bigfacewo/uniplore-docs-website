### 组件介绍
**“数据连接”（Concatenate）**控件连接来自多个来源的数据，把他们合并成一个数据集。**“数据连接”（Concatenate）**控件连接多个数据集，连接操作是“垂直”连接，即两组数据集，数据集大小分别为 10 和 5，连接后生成的新数据集的大小为 15。

<hr/>

- 输入：
  - prm：数据集（定义属性集的数据集）
  - data: 添加的数据集
- 输出：
  - data：连接后的数据集

<hr/>


### 页面介绍
点击**“数据连接”（Concatenate）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/concatenate/param.png) ](/img/aistudio/preprocess/concatenate/param.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>属性域合并</td> 
      <td>
      设置连接数据集的方法
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>数据源识别</td> 
      <td>
      是否将数据集的标识添加到输出数据集，并设置数据集标识属性的类型
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用两个**“加载文件”（File）**控件加载分割后的数据集，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“数据连接”（Concatenate）**控件连接数据集，之后通过**“查看数据”（Data Table）**控件查看连接后的数据集。  
[ ![](/img/aistudio/preprocess/concatenate/workflow.png) ](/img/aistudio/preprocess/concatenate/workflow.png)

案例中加载 bridges.mt1 数据集，其中一个数据集大小为 108（该数据集作为 prm 输入），另一个加载 bridges.mt2 数据集，数据集大小为 108，之后连接两个数据集，并追加数据集标识字段。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/preprocess/concatenate/workflow-result.png ](/img/aistudio/preprocess/concatenate/workflow-result.png)