---
sidebar_position: 110
---
### 组件介绍
**“删减属性值”（Purge Domain）**控件用于移除未使用的属性值和无用的属性，并对剩余的值进行排序。

<hr/>

- 输入：
  - data：数据集
- 输出：
  - data：处理后的数据集

<hr/>


### 页面介绍
点击**“删减属性值”（Purge Domain）**控件查看参数配置页面，如下图所示：  
[ ![](/img/aistudio/preprocess/purge-domain/param.png) ](/img/aistudio/preprocess/purge-domain/param.png)


#### 参数选项
<table>
  <tr>
    <th>选项</th>
    <th width="650">说明</th>
    <th>样例值</th>
  </tr>
  <tr>
      <td>特征值</td> 
      <td>
      指定对特征值进行何种处理
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>分类属性</td> 
      <td>
      指定对分类属性进行何种处理
      </td> 
      <td></td>
  </tr>
  <tr>
      <td>元属性</td> 
      <td>
      指定对元属性进行何种处理
      </td> 
      <td></td>
  </tr>
</table>

### 使用案例
在下图所示的案例中，使用**“加载文件”（File）**控件加载数据，通过**“查看数据”（Data Table）**控件查看加载数据的信息，同时使用**“删减属性值”（Purge Domain）**控件对数据集中的属性进行筛减，之后通过**“查看数据”（Data Table）**控件查看处理后的数据集。   
[ ![](/img/aistudio/preprocess/purge-domain/workflow.png) ](/img/aistudio/preprocess/purge-domain/workflow.png)

案例中加载 bridges 数据集，使用默认配置对数据集进行处理。案例中控件的配置以及执行结果如下图所示。    
[ ![](/img/aistudio/preprocess/purge-domain/workflow-result.png) ](/img/aistudio/preprocess/purge-domain/workflow-result.png)