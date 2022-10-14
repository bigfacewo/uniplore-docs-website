---
sidebar_position: 8
---
### 组件介绍
**“自动特征工程”（Feature Synthesis）**控件组件自动为关系数据集生成特征，本质上，该算法将数据中的关系跟踪到基本字段，然后沿该路径顺序应用数学函数以创建最终特征。通过顺序地堆叠计算，我们观察到我们可以将每个新特征定义为具有一定深度。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：经过深度特征综合后的数据集

<hr/>


### 页面介绍
点击**“自动特征工程”（Feature Synthesis）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/feature-engineering/feature-synthesis/param1.png) ](/img/aistudio/feature-engineering/feature-synthesis/param1.png)

[ ![](/img/aistudio/feature-engineering/feature-synthesis/param2.png) ](/img/aistudio/feature-engineering/feature-synthesis/param2.png)

[ ![](/img/aistudio/feature-engineering/feature-synthesis/param3.png) ](/img/aistudio/feature-engineering/feature-synthesis/param3.png)

#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>Target</td> 
      <td>
      添加实体
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>ID Relations [a one-to-many relationship]</td> 
      <td>
      在实体集合中添加表关系（一对多关系）
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>Aggregation Primitives</td> 
      <td>
      聚合原语，这些原语将相关实例作为输入并输出单个值。它们适用于实体集中的父子关系。如："count"，"sum"，"avg_time_between"。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>Transformation Primitives</td> 
      <td>
      转换原语，这些基元将实体中的一个或多个变量作为输入，并为该实体输出新变量。它们适用于单个实体。如："hour"，"time_since_previous"，"absolute"。
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>Filtering ValuesWhere Primitives</td> 
      <td>
      根据聚合原语或转换原语过滤值
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>Max Depth [If -1, no limit]</td> 
      <td>
      控制DFS返回的要素的最大深度
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>Max Features [If -1 or 0, no limit]</td> 
      <td>
      最大特征量
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“自动特征工程”（Feature Synthesis）**控件进行数据处理，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/feature-engineering/feature-synthesis/workflow.png) ](/img/aistudio/feature-engineering/feature-synthesis/workflow.png)

案例中加载 iris 数据集，**“自动特征工程”（Feature Synthesis）**控件中指定ID列名为id，Aggreagtion Primitives选择median，Transformation Primitives选择not_equal_scalar和greater_than_equal_to_scalar，其余使用默认参数。案例中控件的配置以及执行结果如下图所示。  
[ ![](/img/aistudio/feature-engineering/feature-synthesis/workflow-result.png)   ](/img/aistudio/feature-engineering/feature-synthesis/workflow-result.png)  
